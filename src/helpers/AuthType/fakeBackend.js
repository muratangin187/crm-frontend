import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as url from "../url_helper";

import {
  calenderDefaultCategories,
  events,
  orders,
  orders2,
  productsData,
  customerData,
  shops,
  cartData,
  comments,
  chats,
  groups,
  messages,
  contacts
} from "../../common/data";

let users = [
  { id: 1, username: 'admin', password: '123456', email: 'admin@themesdesign.in' }
];

const fakeBackend = () => {
  // This sets the mock adapter on the default instance
  const myAxios = axios.create({baseURL: "http://46.101.140.72:1337/api/"});
  var mock = new MockAdapter(axios);

  mock.onPost('/post-register').reply(function (config) {

    const user = JSON.parse(config['data']);
    users.push(user);

    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve([200, user]);
      });
    });
  });

  mock.onPost('/post-login').reply(function (config) {
    const user = JSON.parse(config['data']);
    const validUser = users.filter(usr => usr.email === user.username && usr.password === user.password);

    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (validUser['length'] === 1) {
          myAxios.defaults.headers.common = {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQyNTMzMzk4LCJleHAiOjE2NDUxMjUzOTh9.qugknvs1qQi_dinBndnJZbYJmwJY0EhZFaddnQ9qIWk'};
          resolve([200, validUser[0]]);
        } else {
          reject([400, "Username and password are invalid. Please enter correct username and password"]);
        }
      });
    });
  });

  mock.onPost('/forget-pwd').reply(function (config) {
    // User needs to check that user is eXist or not and send mail for Reset New password

    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve([200, "Check you mail and reset your password."]);
      });
    });

  });
  mock.onGet(url.GET_EVENTS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (events) {
          // Passing fake JSON data as response
          resolve([200, events])
        } else {
          reject([400, "Cannot get events"])
        }
      })
    })
  })

  mock.onPost(url.ADD_NEW_EVENT).reply(event => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data])
        } else {
          reject([400, "Cannot add event"])
        }
      })
    })
  });

  mock.onPut(url.UPDATE_EVENT).reply(event => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data])
        } else {
          reject([400, "Cannot update event"])
        }
      })
    })
  })

  mock.onDelete(url.DELETE_EVENT).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.event])
        } else {
          reject([400, "Cannot delete event"])
        }
      })
    })
  })

  mock.onGet(url.GET_CATEGORIES).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (calenderDefaultCategories) {
          // Passing fake JSON data as response
          resolve([200, calenderDefaultCategories])
        } else {
          reject([400, "Cannot get categories"])
        }
      })
    })
  });


  mock.onGet(url.GET_PRODUCTS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (productsData) {
          // Passing fake JSON data as response
          resolve([200, productsData])
        } else {
          reject([400, "Cannot get products"])
        }
      })
    })
  });

  mock.onGet(new RegExp(`${url.GET_PRODUCTS_DETAIL}/*`)).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (productsData) {
          // Passing fake JSON data as response
          const { params } = config
          const product = productsData.find(
            product => product.id.toString() === params.id.toString()
          )
          resolve([200, { ...product, comments }])
        } else {
          reject([400, "Cannot get product detail"])
        }
      })
    })
  });

  mock.onGet(url.GET_ORDERS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (orders) {
          // Passing fake JSON data as response
          resolve([200, orders])
        } else {
          reject([400, "Cannot get orders"])
        }
      })
    })
  })

  mock.onGet(url.GET_ORDERS2).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (orders2) {
          // Passing fake JSON data as response
          resolve([200, orders2])
        } else {
          reject([400, "Cannot get orders"])
        }
      })
    })
  })

    mock.onGet(url.GET_CART_DATA).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (cartData) {
          // Passing fake JSON data as response
          resolve([200, cartData])
        } else {
          reject([400, "Cannot get cart data"])
        }
      })
    })
  })

  mock.onGet(url.GET_CUSTOMERS).reply(() => {
    return new Promise((resolve, reject) => {
      // myAxios.get("log-items").then(data => {
      //   const lastData = data.data.data.map(a => ({
      //       id: a.id,
      //       name: a.attributes.description,
      //       surname: a.attributes.description,
      //       employeeID: "325-250-1106",
      //       status: "StephenRash@teleworm.us",
      //       dataSource: a.attributes.description,
      //       lastNoteDate: "4.2",
      //       lastNote: "$5412",
      //     }));
      //     console.log(lastData);
      //     console.log(data.data.data[0]);
      //     resolve([200, lastData]);
      // }).catch(err => {
      //   console.log(err);
      // });
      setTimeout(() => {
        if (customerData) {
          // Passing fake JSON data as response
          resolve([200, customerData])
        } else {
          reject([400, "Cannot get customers data"])
        }
      })
    })
  })

  mock.onPost(url.ADD_NEW_CUSTOMER).reply(customer => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (customer && customer.data) {
          const json = JSON.parse(customer.data);
          if(!json.id) json.id = customerData.length+1;
          const result = JSON.stringify(json);
          console.log(result);
          // Passing fake JSON data as response
          resolve([200, result])
        } else {
          reject([400, "Cannot add event"])
        }
      })
    })
  });


  mock.onGet(url.GET_SHOPS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shops) {
          // Passing fake JSON data as response
          resolve([200, shops])
        } else {
          reject([400, "Cannot get shops data"])
        }
      })
    })
  })

  mock.onGet(url.GET_CHATS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (chats) {
          // Passing fake JSON data as response
          resolve([200, chats])
        } else {
          reject([400, "Cannot get chats"])
        }
      })
    })
  })

  mock.onGet(url.GET_GROUPS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (groups) {
          // Passing fake JSON data as response
          resolve([200, groups])
        } else {
          reject([400, "Cannot get groups"])
        }
      })
    })
  })

  mock.onGet(url.GET_CONTACTS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (contacts) {
          // Passing fake JSON data as response
          resolve([200, contacts])
        } else {
          reject([400, "Cannot get contacts"])
        }
      })
    })
  })

  mock.onGet(new RegExp(`${url.GET_MESSAGES}/*`)).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (messages) {
          // Passing fake JSON data as response
          const { params } = config
          const filteredMessages = messages.filter(
            msg => msg.roomId === params.roomId
          )
          resolve([200, filteredMessages])
        } else {
          reject([400, "Cannot get messages"])
        }
      })
    })
  })

  mock.onPost(url.ADD_MESSAGE).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config.data) {
          // Passing fake JSON data as response
          resolve([200, config.data])
        } else {
          reject([400, "Cannot add message"])
        }
      })
    })
  })

}

export default fakeBackend;