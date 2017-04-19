import React, { Component } from 'react';

import Loop from './loop.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { data: [{
                            id: 0,
                          	title: "Title 1",
                            description: "All that is gold does not glitter, Not all those who wander are lost; The old that is strong does not wither, Deep roots are not reached by the frost.",
                            link: "http://res.cloudinary.com/djvvlihkg/image/upload/v1491605294/photo5_neuvyh.jpg"
                          	},{
                            id: 1,
                          	title: "Title 2",
                            description: "I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.",
                            link: "http://res.cloudinary.com/djvvlihkg/image/upload/v1491605294/photo7_cxo85g.jpg"
                          	},{
                            id: 2,
                          	title: "Title 3",
                            description: "The world is indeed full of peril, and in it there are many dark places; but still there is much that is fair, and though in all lands love is now mingled with grief, it grows perhaps the greater.",
                            link: "http://res.cloudinary.com/djvvlihkg/image/upload/v1491605294/photo1_u4q0hj.jpg"
                          	},{
                            id: 3,
                          	title: "Title 4",
                            description: "It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.",
                            link: "http://res.cloudinary.com/djvvlihkg/image/upload/v1491605294/photo3_ox7fpz.jpg"
                            },{
                            id: 4,
                            title: "Title 2",
                            description: "I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.",
                            link: "http://res.cloudinary.com/djvvlihkg/image/upload/v1491605294/photo6_m46af3.jpg"
                            },{
                            id: 5,
                            title: "Title 3",
                            description: "orem ipsum dolor sit amet, fringilla commodo, tortor urna nulla luctus nec nullam cras, eget ante praesentium libero viverra, sem mollis sit dui tortor. Ultricies metus turpis, nonummy massa mau",
                            link: "http://res.cloudinary.com/djvvlihkg/image/upload/v1491605294/photo2_buy4qr.jpg"
                            }] };
    }

  render() {
    return (
      <div>
        <h1>Loop Builder App</h1>
        <Loop data={this.state.data}/>
      </div>
    );
  }
}
