
export interface INavItemProps {
    channel: string;
    onClick: (item: any) => void;
}

const NavItem = (props: INavItemProps) => (
    <div className="nav-item"
        onClick={props.onClick}
    >
        <p>{props.channel}</p>
    </div>
);

export default NavItem;