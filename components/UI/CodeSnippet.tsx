import { Copy } from "lucide-react";

interface CodeSnippetProps {
    language: string;
    code: string;
}

export default function CodeSnippet({ language, code }: CodeSnippetProps) {
    return (
        <div
            style={{
                background: "#0F0F12",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.1)",
                overflow: "hidden",
                marginTop: 24,
                marginBottom: 24,
                boxShadow: "0 10px 20px rgba(0,0,0,0.3)"
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 16px",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
            >
                <div style={{ display: "flex", gap: 8 }}>
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#EF4444" }}></div>
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#EAB308" }}></div>
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#22C55E" }}></div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span
                        style={{
                            fontFamily: "var(--font-outfit)",
                            fontSize: 12,
                            fontWeight: 600,
                            color: "rgba(255,255,255,0.5)",
                            textTransform: "uppercase",
                        }}
                    >
                        {language}
                    </span>
                    <Copy size={14} style={{ color: "rgba(255,255,255,0.4)", cursor: "pointer" }} />
                </div>
            </div>
            <div style={{ padding: 24, overflowX: "auto" }}>
                <pre
                    style={{
                        margin: 0,
                        fontFamily: "monospace",
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: "#10B981", // Fira Code Green
                    }}
                >
                    {code}
                </pre>
            </div>
        </div>
    );
}
