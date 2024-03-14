
import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div className="container mx-auto pt-36">
        <div className="max-w-[80rem] bg-white mx-auto rounded-xl px-4 pt-5 flex flex-col gap-y-3">{children}</div>
    </div>
  )
}

export default Container