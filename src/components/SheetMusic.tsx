
type SheetMusicContract = {
    children: React.ReactNode
}


function SheetMusic({ children }: SheetMusicContract) {


    return (
      <div className="flex flex-wrap -mx-2">
        {children}
      </div>
    )
  }
  
  export default SheetMusic
  