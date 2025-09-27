import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { rateLimit } from "@/lib/rate-limit";
import { createHash, hash } from "crypto";

export interface IPostBody {
  email: string;
  subject: string;
  description: string;
}

const TELEGRAM_USER_ID = 402879945;
const SALT = process.env.HASH_SALT

const sendMessage = async (text: string) => await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_USER_ID}&parse_mode=HTML&text=${encodeURIComponent(text)}`);

export const POST = async (req: NextRequest) => {
  try {
    if (req.method !== "POST") {
      return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
    }

    const body: IPostBody = await req.json()
    if(!(body.email && body.subject && body.description))
      return NextResponse.json({ message: "Mandatory label's missing."}, { status: 400 });

    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    const hashedIP = createHash("sha256").update(ip + SALT).digest("hex");
    
    const allowed = await rateLimit(`rate:${hashedIP}`, 1, 60);
    if (!allowed) {
      return NextResponse.json({ message: 'Too many requests. Try again later.' }, { status: 429 });
    }

    const messageText: string = `<b>💎 NEW MESSAGE</b>\n\n<b>Email:</b> ${body.email}\n<b>Subject:</b> ${body.subject}\n<b>Description:</b> ${body.description}\n`;
    const send = await sendMessage(messageText)

    return NextResponse.json({ message: send })
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500 })
  }
}