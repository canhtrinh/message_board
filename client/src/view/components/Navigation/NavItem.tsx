
export interface INavItemProps {
    channel: string;
}

const NavItem = (props: INavItemProps) => (
    <div className="nav-item">
        <p>{props.channel}</p>
    </div>
);

export default NavItem;