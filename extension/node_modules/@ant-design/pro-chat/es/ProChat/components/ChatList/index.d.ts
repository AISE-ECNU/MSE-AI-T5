/// <reference types="react" />
import { ChatListProps } from "../../../ChatList";
import { ChatListItemProps } from "../../../ChatList/ChatListItem";
interface ListProps extends Partial<ChatListProps> {
    showTitle?: boolean;
    itemShouldUpdate?: (prevProps: ChatListItemProps, nextProps: ChatListItemProps) => boolean;
}
declare const List: import("react").NamedExoticComponent<ListProps>;
export default List;
