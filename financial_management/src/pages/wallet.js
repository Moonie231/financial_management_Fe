import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addWallet, wallet} from "../service/walletService";
import {Field, Form, Formik} from "formik";

export default function Wallet() {
    const {idUser} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const wallets = useSelector((state) => {
        return state.wallets.wallets
    })

    useEffect(() => {
        dispatch(wallet(idUser))
    }, [])

    console.log(wallets)

    const handleAdd = (values) => {
        let data = {...values};
        dispatch(addWallet(data))
        navigate(`/${idUser}`)
    }
    return (
        <>
            {/*<nav*/}
            {/*    class="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-light navbar-bg-color">*/}
            {/*    <div class="navbar-wrapper">*/}
            {/*        <div class="navbar-header d-md-none">*/}
            {/*            <ul class="nav navbar-nav flex-row">*/}
            {/*                <li class="nav-item mobile-menu d-md-none mr-auto"><a*/}
            {/*                    class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i*/}
            {/*                    class="ft-menu font-large-1"></i></a></li>*/}
            {/*                <li class="nav-item d-md-none">*/}
            {/*                    <button onclick="showWallet()">*/}
            {/*                        <img class="brand-logo d-none d-md-block" alt="CryptoDash admin logo"*/}
            {/*                             src="../../../app-assets/images/logo/logo.png"></img>*/}
            {/*                        <img class="brand-logo d-sm-block d-md-none" alt="CryptoDash admin logo sm"*/}
            {/*                             src="../../../app-assets/images/logo/logo-sm.png"></img>*/}
            {/*                    </button>*/}
            {/*                </li>*/}
            {/*                <li class="nav-item d-md-none"><a class="nav-link open-navbar-container" data-toggle="collapse"*/}
            {/*                                                  data-target="#navbar-mobile"><i class="la la-ellipsis-v"> </i></a>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*        <div class="navbar-container">*/}
            {/*            <div class="collapse navbar-collapse" id="navbar-mobile">*/}
            {/*                <ul class="nav navbar-nav mr-auto float-left">*/}

            {/*                </ul>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</nav>*/}
            {/*<div class="main-menu menu-fixed menu-dark menu-bg-default rounded menu-accordion menu-shadow">*/}
            {/*    <div class="main-menu-content">*/}
            {/*        <a class="navigation-brand d-none d-md-block d-lg-block d-xl-block" href="index.html">*/}
            {/*            <img class="brand-logo" alt="CryptoDash admin logo"*/}
            {/*                 src="../../../app-assets/images/logo/logo.png"></img>*/}
            {/*        </a>*/}
            {/*        <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">*/}
            {/*            <li class="active">*/}
            {/*                <a onclick="showWallet()">*/}
            {/*                    <i class="icon-wallet"></i>Wallet*/}
            {/*                </a>*/}
            {/*            </li>*/}
            {/*            <li class=" nav-item">*/}
            {/*                <a onclick="showUsers()">*/}
            {/*                    <i class="icon-user-following"></i>Users*/}
            {/*                </a>*/}
            {/*            </li>*/}
            {/*            <li class=" nav-item">*/}
            {/*                <a onclick="showFormProfile()">*/}
            {/*                    <i class="ft-user"></i> Profile*/}
            {/*                </a>*/}
            {/*            </li>*/}
            {/*            <li class=" nav-item">*/}
            {/*                <a onclick="logOut()">*/}
            {/*                    <i class="ft-power"></i> Log Out*/}
            {/*                </a>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div class="app-content content">
                <div class="content-wrapper">
                    <div class="content-header row">
                        <div class="content-header-left col-md-1 col-12 mb-2 breadcrumb-new">
                            <h3 class="content-header-title mb-0 d-inline-block">Wallet</h3>
                        </div>
                        <div class="content-header-right col-md-11 col-12">
                            <div class="btn-group float-md-left">
                                <div class="btn-group float-md-left">
                                    <button class="btn btn-primary" data-bs-toggle="modal"
                                            data-bs-target="#createModal">ADD
                                        WALLET
                                    </button>
                                    <div class="modal fade" id="createModal" tabindex="-1"
                                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">ADD WALLET</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                </div>
                                                <Formik initialValues={{
                                                    nameWallet: "",
                                                    user: 1
                                                }}
                                                        onSubmit={handleAdd}
                                                >
                                                    <Form>
                                                        <div class="modal-body">
                                                            <div class="input-group flex-nowrap">
                                                        <span class="input-group-text"
                                                              id="addon-wrapping">Name Wallet</span>
                                                                <Field type="text" class="form-control" id="nameWallet"
                                                                       name={"nameWallet"}
                                                                       aria-describedby="addon-wrapping"/>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary"
                                                                    data-bs-dismiss="modal">Close
                                                            </button>
                                                            <button type="submit" class="btn btn-danger"
                                                                    data-bs-dismiss="modal">Save
                                                            </button>
                                                        </div>
                                                    </Form>
                                                </Formik>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped">
                            <tr>
                                <td>#</td>
                                <td>Name Wallet</td>
                                <td>Total Money</td>
                                <td>Income Money</td>
                                <td>PayMoney</td>
                            </tr>

                            {wallets.map((item, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.nameWallet}</td>
                                    <td>{item.incomeMoney - item.payMoney}</td>
                                    <td>{item.incomeMoney}</td>
                                    <td>{item.payMoney}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}