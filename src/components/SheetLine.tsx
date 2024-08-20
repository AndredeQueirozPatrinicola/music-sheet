
type SheetLineContract = {
    children: React.ReactNode
}

function SheetLine({children}: SheetLineContract) {


    return (
      <div className="">
        {children}
      </div>
    )
  }
  
  export default SheetLine
  