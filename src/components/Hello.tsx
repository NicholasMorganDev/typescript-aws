import { HelloProps } from "../types/formDataType"

export const Hello = ({firstName, lastName, age} :HelloProps) => {

  return (
    <>
      <h2 className="h2-box">
        Good Afternoon, {firstName} {lastName}!
      </h2>
    </>
  )
}
