<script>
  import Carousel from "../Carousel.svelte";
  import Item from "../Item.svelte";

  export let dots;
  export let loop;
  export let perPage;
  export let autoplay;
  export let duration;
  export let easing;
  export let startIndex;
  export let controls;
</script>

<!-- <Carousel images="{images}" /> -->

<Carousel
  style="width: 100%; text-align: center;"
  dots="{dots}"
  loop="{loop}"
  perPage="{perPage}"
  autoplay="{autoplay}"
  duration="{duration}"
  easing="{easing}"
  startIndex="{startIndex}"
  controls="{controls}"
>
  <Item><img src="//placekitten.com/256?image=1" alt="Kitten 1" /></Item>
  <Item><img src="//placekitten.com/256?image=2" alt="Kitten 2" /></Item>
  <Item><img src="//placekitten.com/256?image=3" alt="Kitten 3" /></Item>
  <Item><img src="//placekitten.com/256?image=4" alt="Kitten 4" /></Item>
</Carousel>
