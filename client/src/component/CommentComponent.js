import React, { Component } from 'react';
import { Thumbnail, Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
export default class CommentComponent extends Component {
  render() {
    return (
          <Card>
            <CardItem header>
              <Thumbnail source={{uri: 'https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png'}} />
              <Text> {this.props.comment.userName} </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {this.props.comment.comment}
                </Text>
              </Body>
            </CardItem>
         </Card>
    );
  }
}