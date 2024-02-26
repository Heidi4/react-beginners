interface Props {
    text: string
}
const Buttons = ({text}: Props) => {
  return (
    <>
    <button type="button" className="btn btn-primary">{text}</button>
    </>
  )
}

export default Buttons