// not export and arrayFn
// const TreeShakingTest = () => {
//   const handleClickTest = () => {
//     console.log('handleClickTest')
//   }
//   return <div onClick={handleClickTest}>TreeShakingTest</div>
// }

// export and arrayFn
export const TreeShakingIsExport = () => {
  const handleClickTest = () => {
    console.log('handleClickTest')
  }
  return <div onClick={handleClickTest}>TreeShakingIsExport</div>
}

// not export and function
// function TreeShakeTest() {
//   return <div>TreeShakeTest</div>
// }

// export and function
export function TreeShakeIsExport() {
  return <div>TreeShakeIsExport</div>
}