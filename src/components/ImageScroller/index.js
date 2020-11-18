import { Wrapper, Item, Items } from "./styles";

const ImageScroller = () => {
  return (
    <Wrapper>
      <Items>
        <Item>
          <img src="https://unsplash.it/240/377?image=1" alt="" />
        </Item>
        <Item>
          <img src="https://unsplash.it/240/377?image=2" alt="" />
        </Item>
        <Item>
          <img src="https://unsplash.it/240/377?image=3" alt="" />
        </Item>
        <Item>
          <img src="https://unsplash.it/240/377?image=4" alt="" />
        </Item>
      </Items>
    </Wrapper>
  );
};

export default ImageScroller;
