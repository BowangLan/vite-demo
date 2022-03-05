
export default ({ children, onClick, side = 'left', p = `px-4` }: any) => {
  const iconContainer = `sm:hidden absolute ${side}-0 h-full ${p} flex justify-center items-center`
  return (
    <div className={iconContainer} onClick={onClick}>
    {children}
    </div>
  )
}
