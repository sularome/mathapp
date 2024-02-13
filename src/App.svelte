<script>
  import './app.pcss';
  import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
  import Addition from './lib/Addition.svelte';
</script>

<header>
  <Navbar>
    <NavBrand href="/">
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Mathka</span
      >
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi href="/">Mathka</NavLi>
    </NavUl>
  </Navbar>
</header>
<div class="mx-auto flex w-full px-4">
  <main class="mx-auto w-full lg:ml-72">
    <Addition />
  </main>
</div>
