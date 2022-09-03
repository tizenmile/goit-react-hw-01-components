import css from "./FriendListItem.module.css"
export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <>
            <span className={isOnline ? css.online : css.offline}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </>
    )

}