import React, { Component } from 'react';

import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';
import PageHeading from '../../components/PageHeading';
import ItemTable from '../../components/ItemTable';
import { getItemData } from '../../redux/actions';
import { connect } from 'react-redux';


class LoanTable extends Component {
    componentDidMount() {
        this.props.getItemData();
    }

    render() {
        const { borrowedItem } = this.props;
        console.log("loan item: ", borrowedItem);
        return (

            <div>
                {/* <!-- Page Wrapper --> */}
                <div id="wrapper" >

                    {/* <!-- Sidebar --> */}
                    < Sidebar />
                    {/* <!-- End of Sidebar --> */}

                    {/* <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/* <!-- Main Content --> */}
                        <div id="content">

                            {/* <!-- Topbar --> */}
                            <Topbar />
                            {/* <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            <div className="container-fluid">

                                <PageHeading title='Tabel Peminjaman' />
                                <ItemTable data={borrowedItem} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const reduxState = state => ({
    borrowedItem: state.getBorrowItem.borrowedItem,
})

const reduxDispatch = dispatch => ({
    getItemData: data => dispatch(getItemData(data)),
})

export default connect(reduxState, reduxDispatch)(LoanTable);