import { FriendListItem } from "components/FriendListItem/FriendListItem"
import css from "./FriendList.module.css"
export const FriendList = ({ friends }) => {
    return (
        <div>
            <ul className={css.friendList}>
                {friends.map(({ avatar, name, isOnline, id }) =>
                (
                    <li key={id} className={css.list}>
                        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
                    </li>
                ))}
            </ul>
        </div>
    );
}