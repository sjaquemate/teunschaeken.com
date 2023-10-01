import { useEffect, useState } from "react"


const useTime = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const startTime = new Date()
    const intervalId = setInterval(() => {
      const dt = (new Date()).getTime() - startTime.getTime()
      setTime(dt);
    }, 10);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return time;
};

function useOnMount<T>({ before, after }: { before: T, after: T }): T {
  const [value, setValue] = useState<T>(before)
  useEffect(() => {
    setValue(after)
  }, [])
  return value
}

function useOnTime<T>(timeseries: { time: number, value: T }[]): T {
  const [value, setValue] = useState<T>(timeseries[0].value)

  const t = useTime()
  useEffect(() => {
    const timeValue = [...timeseries].reverse().find(({ time }) => t > time)
    if (timeValue) {
      setValue(timeValue.value)
    }
  }, [t])
  return value
}



function HighlightedComponent({text, times}: {text: string, times: {in: number, out: number}}) {
  return <div className={`bg-blue-400 transition-all ease-in-out
    ${useOnTime([
    { time: 0, value: 'w-[0%]' },
    { time: times.in, value: 'w-[100%] text-white' },
    { time: times.out, value: 'w-[0%]' },
  ])}
  `}
  >
    {text}
  </div>
}

export default function App() {

  return (
    <div className="w-screen h-screen bg-neutral-50 overflow-hidden"  >
      <div className="flex h-full items-center ">

        {/* <HighlightedComponent /> */}

        <div className="px-4 w-full flex flex-col gap-6 items-center justify-center">
          <div className={`
            flex justify-center bg-blue-400 rounded-full w-64 h-64 
            transition duration-500 delay-500 ease-out
            ${useOnMount({ before: "-translate-y-20 opacity-0", after: "" })}
          `} />
          <div className={`flex flex-col 
            transition duration-1000 delay-1000 ease-out 
            ${useOnMount({ before: "-translate-y-10 opacity-0", after: "" })} `}>
            <div className="text-center text-[2.5rem] tracking-tight"
            >
              Teun Schaeken
            </div>
            <div className="tracking-tight">
              Software engineer specialized in Devops, Front-end development and Test Automation.
              {/* Software engineer specialized in&nbsp;
              {/* <HighlightedComponent /> */}
              {/* <div className="inline-block"><HighlightedComponent text="Devops" times={{in: 2_000, out: 3_000}}/> </div>
              ,&nbsp; 
              <div className="inline-block whitespace-nowrap"><HighlightedComponent text="Front-End development" times={{in: 2_500, out: 3_500}}/> </div>
              &nbsp;and&nbsp; 
              <div className="inline-block whitespace-nowrap"><HighlightedComponent text="Test Automation" times={{in: 3_000, out: 4_000}}/> </div> */} 
              {/* <div className="inline-block"><HighlightedComponent text="Test Automation" times={{in: 4_000, out: 5_000}}/> </div>
              . */}

            </div>
            <div>

              <div className="mt-4 mb-4 flex justify-center">

                <a className=" bg-black
                  hover:text-white duration-500 
          rounded-full hover:bg-blue-400
          text-neutral-50 group inline-flex items-center 
          px-4 lg:px-5 lg:py-4 md:px-6 py-3 text-sm md:text-base font-semibold 
          cursor-pointer transition-colors">
                  CONTACT ME
                </a>

              </div>
            </div>



            {/* <div className="flex w-full justify-center">

              <a
                className="cursor-pointer
              rounded-md border text-white
              border-t3-purple-200/20 bg-t3-purple-100/10 
              px-2 py-2 text-sm transition-colors duration-300 
              hover:border-t3-purple-300/50 hover:bg-t3-purple-100/20 
           md:px-3 md:py-3 md:text-lg lg:px-5 lg:py-4 lg:text-xl"
              >
                <code> teun.schaeken@gmail.com</code>
              </a>
            </div> */}

            {/* <div className="mt-6 flex w-full justify-center">

              <a
                className="cursor-pointer
              rounded-md border text-white
              border-t3-purple-200/20 bg-t3-purple-100/10 
              px-2 py-2 text-sm transition-colors duration-300 
              hover:border-t3-purple-300/50 hover:bg-t3-purple-100/20 
           md:px-3 md:py-3 md:text-lg lg:px-5 lg:py-4 lg:text-xl"
              >
                <code> +316 23110261 </code>
              </a>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  )
}
