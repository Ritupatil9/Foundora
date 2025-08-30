"use client";

import TextType from "@/components/pages/TextType";

export default function AgentsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      

      {/* ✅ TextType component should be rendered here */}
      <TextType 
        text={[
          "Text typing effect",
          "for your websites",
          "Happy coding!"
        ]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
    </div>
  );
}
