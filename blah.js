{/* <!-- Divider --> */ }
<hr className="sidebar-divider my-0" />

{/* <!-- Nav Item - Dashboard --> */ }
<li className="nav-item">
    <Link className="nav-link" to="/dashboard">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
    </Link>
</li>

{/* <!-- Divider --> */ }
<hr className="sidebar-divider" />

{/* <!-- Heading --> */ }
<div className="sidebar-heading">
    Interface
</div>

{/* <!-- Nav Item - Pages Collapse Menu --> */ }
<li className="nav-item">
    <a className='nav-link collapsed' href="#" data-toggle="collapse" data-target="#collapseTwo" aria-controls="collapseTwo">
        <i className="fas fa-fw fa-cog"></i>
        <span>Components</span>
    </a>
    <div id="collapseTwo" className='collapse' aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <a className="collapse-item" href="buttons.html">Buttons</a>
            <Link className="collapse-item" to="/cards">Cards</Link>
        </div>
    </div>
</li>

{/* <!-- Nav Item - Utilities Collapse Menu --> */ }
<li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
        <i className="fas fa-fw fa-wrench"></i>
        <span>Utilities</span>
    </a>
    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Utilities:</h6>
            <a className="collapse-item" href="utilities-color.html">Colors</a>
            <a className="collapse-item" href="utilities-border.html">Borders</a>
            <a className="collapse-item" href="utilities-animation.html">Animations</a>
            <a className="collapse-item" href="utilities-other.html">Other</a>
        </div>
    </div>
</li>

{/* <!-- Divider --> */ }
<hr className="sidebar-divider" />

{/* <!-- Heading --> */ }
<div className="sidebar-heading">
    Addons
</div>

{/* <!-- Nav Item - Charts --> */ }
<li className="nav-item">
    <Link className="nav-link" to="/charts">
        <i className="fas fa-fw fa-chart-area"></i>
        <span>Charts</span></Link>
</li>

{/* <!-- Nav Item - Tables --> */ }
<li className="nav-item">
    <a className="nav-link" href="tables.html">
        <i className="fas fa-fw fa-table"></i>
        <span>Tables</span></a>
</li>

{/* <!-- Divider --> */ }
<hr className="sidebar-divider d-none d-md-block" />

