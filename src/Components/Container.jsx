import style from './Container.module.css'
function Container({children}){
  return (
    <div className={style.center}>{children}</div>
  )
}
export default Container