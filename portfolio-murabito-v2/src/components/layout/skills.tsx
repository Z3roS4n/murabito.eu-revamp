// components/Skills.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillsProps {
  skills: string[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>My Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} className="text-sm px-3 py-1">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
