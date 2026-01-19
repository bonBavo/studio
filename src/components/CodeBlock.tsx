
import { cn } from '@/lib/utils';

type CodeBlockProps = {
  code: string;
  className?: string;
};

export default function CodeBlock({ code, className }: CodeBlockProps) {
  return (
    <pre className={cn("bg-muted p-4 rounded-md text-muted-foreground font-code text-sm overflow-x-auto", className)}>
      <code>{code}</code>
    </pre>
  );
}
