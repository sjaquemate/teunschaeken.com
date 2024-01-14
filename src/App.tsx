import { useEffect, useState } from "react"

import { Button } from "./@/components/ui/button"

export function TypographyInlineCode({text}: {text: string}) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      <span>
        {text}
      </span>
    </code>
  )
}

export default function App() {

  return (
    <div className="w-screen h-screen bg-white"  >

      <div className="flex h-full items-center ">

        <div className="absolute px-4 w-full flex flex-col gap-6 items-center justify-center">
          <div className={`
            relative flex justify-center rounded-full w-64 h-64 
            `}
          >
            <img src='pf.jpg' className="absolute rounded-full" />
          </div>


          <div className="flex flex-col">
            <div className="text-center text-[2.5rem] tracking-tight"
            >
              Teun Schaeken
            </div>
            <div className="tracking-tight"
            >
              Software engineer specialized in Devops, Automation, and Full-stack development.
            </div>
            <div>

              <div className="mt-4 mb-4 flex items-center flex-col gap-2"

              >

                <Button variant="default" >Get in touch</Button>

                {/* <TypographyInlineCode text="teunschaeken@gmail.com"/>
                <TypographyInlineCode text="+316 23110261"/> */}
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}
