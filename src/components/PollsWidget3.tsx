export const PollsWidget3 = (_props: {}) => {
    return (
        <div id="polls-widget-3" className="sidebar-item widget_polls-widget">
            <div className="sidebar-title">Weekly Poll</div>
            <div id="polls-173" className="wp-polls"></div>
            <h1>Lorem ipsum dolor sit amet?</h1>

            <div id="polls-173-ans" className="wp-polls-ans">
                <ul className="wp-polls-ul">
                    <li>Saxbys
                        <small>(40%)</small>
                        <div className="pollbar" style = {{"width": "40%"}} title="Saxbys (40%)"></div>
                    </li>
                    <li>Board and Brew
                        <small>(31%)</small>
                        <div className="pollbar" style = {{"width": "31%"}} title="Board and Brew (31%)"></div>
                    </li>
                    <li>Green Line Cafe
                        <small>(12%)</small>
                        <div className="pollbar" style = {{"width": "12%"}} title="Green Line Cafe (12%)"></div>
                    </li>
                    <li><strong>Greek From Greece <small>(10%)</small></strong>
                        <div className="pollbar" style = {{"width": "10%"}} title="You Have Voted For This Choice - Greek From Greece (10%)"></div>
                    </li>
                    <li>Elixir
                        <small>(4%)</small>
                        <div className="pollbar" style = {{"width": "4%"}} title="Elixir (4%)"></div>
                    </li>
                    <li>Arterial Coffee
                        <small>(4%)</small>
                        <div className="pollbar" style = {{"width": "4%"}} title="Arterial Coffee (4%)"></div>
                    </li>
                </ul>
            </div>
        </div>
    
    
    );
}