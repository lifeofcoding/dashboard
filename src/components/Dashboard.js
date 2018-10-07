import React, { Component, PropTypes } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="au-card au-card--no-shadow au-card--no-pad m-b-40">
                                    <div className="au-card-title" style={{backgroundImage:"url('images/bg-title-01.jpg')"}}>
                                        <div className="bg-overlay bg-overlay--blue"></div>
                                        <h3>
                                            <i className="zmdi zmdi-account-calendar"></i>26 April, 2018</h3>
                                        <button className="au-btn-plus">
                                            <i className="zmdi zmdi-plus"></i>
                                        </button>
                                    </div>
                                    <div className="au-task js-list-load">
                                        <div className="au-task__title">
                                            <p>Tasks for John Doe</p>
                                        </div>
                                        <div className="au-task-list js-scrollbar3">
                                            <div className="au-task__item au-task__item--danger">
                                                <div className="au-task__item-inner">
                                                    <h5 className="task">
                                                        <a href="#">Meeting about plan for Admin Template 2018</a>
                                                    </h5>
                                                    <span className="time">10:00 AM</span>
                                                </div>
                                            </div>
                                            <div className="au-task__item au-task__item--warning">
                                                <div className="au-task__item-inner">
                                                    <h5 className="task">
                                                        <a href="#">Create new task for Dashboard</a>
                                                    </h5>
                                                    <span className="time">11:00 AM</span>
                                                </div>
                                            </div>
                                            <div className="au-task__item au-task__item--primary">
                                                <div className="au-task__item-inner">
                                                    <h5 className="task">
                                                        <a href="#">Meeting about plan for Admin Template 2018</a>
                                                    </h5>
                                                    <span className="time">02:00 PM</span>
                                                </div>
                                            </div>
                                            <div className="au-task__item au-task__item--success">
                                                <div className="au-task__item-inner">
                                                    <h5 className="task">
                                                        <a href="#">Create new task for Dashboard</a>
                                                    </h5>
                                                    <span className="time">03:30 PM</span>
                                                </div>
                                            </div>
                                            <div className="au-task__item au-task__item--danger js-load-item">
                                                <div className="au-task__item-inner">
                                                    <h5 className="task">
                                                        <a href="#">Meeting about plan for Admin Template 2018</a>
                                                    </h5>
                                                    <span className="time">10:00 AM</span>
                                                </div>
                                            </div>
                                            <div className="au-task__item au-task__item--warning js-load-item">
                                                <div className="au-task__item-inner">
                                                    <h5 className="task">
                                                        <a href="#">Create new task for Dashboard</a>
                                                    </h5>
                                                    <span className="time">11:00 AM</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="au-task__footer">
                                            <button className="au-btn au-btn-load js-load-btn">load more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="au-card au-card--no-shadow au-card--no-pad m-b-40">
                                    <div className="au-card-title" style={{backgroundImage:"url('images/bg-title-03.jpg')"}}>
                                        <div className="bg-overlay bg-overlay--blue"></div>
                                        <h3>
                                            <i className="zmdi zmdi-comment-text"></i>New Messages</h3>
                                        <button className="au-btn-plus">
                                            <i className="zmdi zmdi-plus"></i>
                                        </button>
                                    </div>
                                    <div className="au-inbox-wrap js-inbox-wrap">
                                        <div className="au-message js-list-load">
                                            <div className="au-message__noti">
                                                <p>You Have
                                                    <span>2</span>

                                                    new messages
                                                </p>
                                            </div>
                                            <div className="au-message-list">
                                                <div className="au-message__item unread">
                                                    <div className="au-message__item-inner">
                                                        <div className="au-message__item-text">
                                                            <div className="avatar-wrap">
                                                                <div className="avatar">
                                                                    <img src="images/icon/avatar-02.jpg" alt="John Smith" />
                                                                </div>
                                                            </div>
                                                            <div className="text">
                                                                <h5 className="name">John Smith</h5>
                                                                <p>Have sent a photo</p>
                                                            </div>
                                                        </div>
                                                        <div className="au-message__item-time">
                                                            <span>12 Min ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="au-message__item unread">
                                                    <div className="au-message__item-inner">
                                                        <div className="au-message__item-text">
                                                            <div className="avatar-wrap online">
                                                                <div className="avatar">
                                                                    <img src="images/icon/avatar-03.jpg" alt="Nicholas Martinez" />
                                                                </div>
                                                            </div>
                                                            <div className="text">
                                                                <h5 className="name">Nicholas Martinez</h5>
                                                                <p>You are now connected on message</p>
                                                            </div>
                                                        </div>
                                                        <div className="au-message__item-time">
                                                            <span>11:00 PM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="au-message__item">
                                                    <div className="au-message__item-inner">
                                                        <div className="au-message__item-text">
                                                            <div className="avatar-wrap online">
                                                                <div className="avatar">
                                                                    <img src="images/icon/avatar-04.jpg" alt="Michelle Sims" />
                                                                </div>
                                                            </div>
                                                            <div className="text">
                                                                <h5 className="name">Michelle Sims</h5>
                                                                <p>Lorem ipsum dolor sit amet</p>
                                                            </div>
                                                        </div>
                                                        <div className="au-message__item-time">
                                                            <span>Yesterday</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="au-message__item">
                                                    <div className="au-message__item-inner">
                                                        <div className="au-message__item-text">
                                                            <div className="avatar-wrap">
                                                                <div className="avatar">
                                                                    <img src="images/icon/avatar-05.jpg" alt="Michelle Sims" />
                                                                </div>
                                                            </div>
                                                            <div className="text">
                                                                <h5 className="name">Michelle Sims</h5>
                                                                <p>Purus feugiat finibus</p>
                                                            </div>
                                                        </div>
                                                        <div className="au-message__item-time">
                                                            <span>Sunday</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="au-message__item js-load-item">
                                                    <div className="au-message__item-inner">
                                                        <div className="au-message__item-text">
                                                            <div className="avatar-wrap online">
                                                                <div className="avatar">
                                                                    <img src="images/icon/avatar-04.jpg" alt="Michelle Sims" />
                                                                </div>
                                                            </div>
                                                            <div className="text">
                                                                <h5 className="name">Michelle Sims</h5>
                                                                <p>Lorem ipsum dolor sit amet</p>
                                                            </div>
                                                        </div>
                                                        <div className="au-message__item-time">
                                                            <span>Yesterday</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="au-message__item js-load-item">
                                                    <div className="au-message__item-inner">
                                                        <div className="au-message__item-text">
                                                            <div className="avatar-wrap">
                                                                <div className="avatar">
                                                                    <img src="images/icon/avatar-05.jpg" alt="Michelle Sims" />
                                                                </div>
                                                            </div>
                                                            <div className="text">
                                                                <h5 className="name">Michelle Sims</h5>
                                                                <p>Purus feugiat finibus</p>
                                                            </div>
                                                        </div>
                                                        <div className="au-message__item-time">
                                                            <span>Sunday</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="au-message__footer">
                                                <button className="au-btn au-btn-load js-load-btn">load more</button>
                                            </div>
                                        </div>
                                        <div className="au-chat">
                                            <div className="au-chat__title">
                                                <div className="au-chat-info">
                                                    <div className="avatar-wrap online">
                                                        <div className="avatar avatar--small">
                                                            <img src="images/icon/avatar-02.jpg" alt="John Smith" />
                                                        </div>
                                                    </div>
                                                    <span className="nick">
                                                        <a href="#">John Smith</a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="au-chat__content">
                                                <div className="recei-mess-wrap">
                                                    <span className="mess-time">12 Min ago</span>
                                                    <div className="recei-mess__inner">
                                                        <div className="avatar avatar--tiny">
                                                            <img src="images/icon/avatar-02.jpg" alt="John Smith" />
                                                        </div>
                                                        <div className="recei-mess-list">
                                                            <div className="recei-mess">Lorem ipsum dolor sit amet, consectetur adipiscing elit non iaculis</div>
                                                            <div className="recei-mess">Donec tempor, sapien ac viverra</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="send-mess-wrap">
                                                    <span className="mess-time">30 Sec ago</span>
                                                    <div className="send-mess__inner">
                                                        <div className="send-mess-list">
                                                            <div className="send-mess">Lorem ipsum dolor sit amet, consectetur adipiscing elit non iaculis</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="au-chat-textfield">
                                                <form className="au-form-icon">
                                                    <input className="au-input au-input--full au-input--h65" type="text" placeholder="Type a message" />
                                                    <button className="au-input-icon">
                                                        <i className="zmdi zmdi-camera"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="au-card au-card--no-shadow au-card--no-pad m-b-40 au-card--border">
                                    <div className="au-card-title" style={{backgroundImage:"url('images/bg-title-2.jpg')"}}>
                                        <div className="bg-overlay bg-overlay--blue"></div>
                                        <h3>
                                            <i className="zmdi zmdi-comment-text"></i>Chat</h3>
                                        <button className="au-btn-plus">
                                            <i className="zmdi zmdi-plus"></i>
                                        </button>
                                    </div>
                                    <div className="au-inbox-wrap">
                                        <div className="au-chat au-chat--border">
                                            <div className="au-chat__title">
                                                <div className="au-chat-info">
                                                    <div className="avatar-wrap online">
                                                        <div className="avatar avatar--small">
                                                            <img src="images/icon/avatar-02.jpg" alt="John Smith" />
                                                        </div>
                                                    </div>
                                                    <span className="nick">
                                                        <a href="#">John Smith</a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="au-chat__content au-chat__content2 js-scrollbar5">
                                                <div className="recei-mess-wrap">
                                                    <span className="mess-time">12 Min ago</span>
                                                    <div className="recei-mess__inner">
                                                        <div className="avatar avatar--tiny">
                                                            <img src="images/icon/avatar-02.jpg" alt="John Smith" />
                                                        </div>
                                                        <div className="recei-mess-list">
                                                            <div className="recei-mess">Lorem ipsum dolor sit amet elit</div>
                                                            <div className="recei-mess">Donec tempor viverra</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="send-mess-wrap">
                                                    <span className="mess-time">30 Sec ago</span>
                                                    <div className="send-mess__inner">
                                                        <div className="send-mess-list">
                                                            <div className="send-mess">Lorem ipsum dolor sit amet elit</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="au-chat-textfield">
                                                <form className="au-form-icon">
                                                    <input className="au-input au-input--full au-input--h65" type="text" placeholder="Type a message" />
                                                    <button className="au-input-icon">
                                                        <i className="zmdi zmdi-camera"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
