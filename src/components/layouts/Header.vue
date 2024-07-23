<template>
    <header class="bg-customDark  shadow text-white ">
        <div clas="">
            <div class="bg-customDark container mx-auto px-0 py-0 flex items-center justify-between">
                <div>
                    <a href="#">
                        <img src="./../../assets/img/logoE-shop.jpg" alt="Logo E-Shop" class="w-[200px] md:w-[150px]">
                    </a>
                </div>
                <div>
                    <input type="text" class="rounded-full text-black px-6 py-3 w-96 md:px-1"
                        name="buscadorProdutos" id="buscadorProdutos" placeholder="Encontre aqui as melhores ofertas">
                </div>
                <div class="hidden lg:block">
                    <button class="rounded-full hover:bg-white hover:text-black border px-3 py-1">
                        Entre ou cadastre-se <br>
                        <small>Para ver seus pedidos</small>
                    </button>
                </div>
                <div class="hidden md:block lg:hidden">
                    <button class="rounded-full hover:bg-white hover:text-black border px-5 py-3">
                        <i class="fa-regular fa-user"></i><br><small>Login</small>
                    </button>
                </div>
                <div class="hidden md:block">
                    <button title="Favoritos" class="px-6">
                        <i class="fa-solid fa-heart text-xl lg:text-3xl"></i>
                    </button>
                    <button title="Carrinho">
                        <i class="fa-regular fa-cart-shopping text-xl lg:text-3xl"></i>
                    </button>
                </div>
            </div>
            <div class="bg-customDark">
                <div class="hidden md:block">
                    <nav class="px-4 py-6 flex items-center justify-between">
                        <a href="#" class="w-40 text-center rounded-full hover:bg-white hover:text-black">Departamentos</a>
                        <a href="#" class="w-40 text-center rounded-full hover:bg-white hover:text-black">Cupom</a>
                        <a href="#" class="w-40 text-center rounded-full hover:bg-white hover:text-black">Cartão Loja</a>
                        <a href="#" class="w-40 text-center rounded-full hover:bg-white hover:text-black">Marketplace</a>
                        <a href="#" class="w-40 text-center rounded-full hover:bg-white hover:text-black">Anunciadas na TV</a>
                        <a href="#" class="w-40 text-center rounded-full hover:bg-white hover:text-black">Retira Rápido</a>
                        <a href="#" class="w-40 text-center rounded-full hover:bg-white hover:text-black">Pague com Pix</a>
                        <a href="#" class="w-40 text-center rounded-full hover:bg-white hover:text-black">Serviço</a>
                    </nav>
                </div>
                <div class="md:hidden">
                    <div class="flex items-center justify-between px-4 py-6">
                        <nav class="relative">
                            <button @click="toggleMenu" class="block md:hidden px-4 py-2 rounded text-white bg-black">
                            ☰
                            </button>
                            <div :class="{
                                    'hidden': !isMenuOpen, 
                                    'flex': isMenuOpen, 
                                    'flex-col': true, 
                                    'absolute': true, 
                                    'bg-black': true, 
                                    'top-14': true, 
                                    'left-0': true, 
                                    'w-screen': isMenuOpen,
                                    'space-y-4': true,
                                    'z-50': true, 
                                    'pl-4': true,
                                }" style="left: -15px;">
                                <div>
                                    <a href="#" @click="toggleSubMenu" class="hover:bg-white hover:text-black">Departamentos <i class="fa-solid fa-chevron-right"></i></a>
                                    <div v-show="isSubMenuOpen" class="ml-4 mt-2 space-y-2">
                                        <a href="#" class="block rounded-full hover:bg-white hover:text-black">Masculinos</a>
                                        <a href="#" class="block rounded-full hover:bg-white hover:text-black">Femininos</a>
                                        <a href="#" class="block rounded-full hover:bg-white hover:text-black">Infantil</a>
                                    </div>
                                </div>
                                <a href="#" class="hover:bg-white hover:text-black rounded-full">Cupom</a>
                                <a href="#" class="hover:bg-white hover:text-black rounded-full">Cartão Loja</a>
                                <a href="#" class="hover:bg-white hover:text-black rounded-full">Marketplace</a>
                                <a href="#" class="hover:bg-white hover:text-black rounded-full">Anunciadas na TV</a>
                                <a href="#" class="hover:bg-white hover:text-black rounded-full">Retira Rápido</a>
                                <a href="#" class="hover:bg-white hover:text-black rounded-full">Pague com Pix</a>
                                <a href="#" class="hover:bg-white hover:text-black rounded-full">Serviço</a>
                            </div>
                        </nav>
                        <div class="">
                            <button class="rounded-full hover:bg-white hover:text-black border px-2 py-1">
                                Entre ou cadastre-se <br>
                                <small>Para ver seus pedidos</small>
                            </button>
                        </div>
                        <div>
                            <button title="Favoritos" class="px-6">
                                <i class="fa-solid fa-heart text-xl lg:text-3xl"></i>
                            </button>
                            <button title="Carrinho">
                                <i class="fa-regular fa-cart-shopping text-xl lg:text-3xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  </template>
  
  <script>
    export default {
        name: 'Header',
        data() {
            return {
                isMenuOpen: false,
                isSubMenuOpen: false,
            };
        },
        methods: {
            toggleMenu() {
                this.isMenuOpen = !this.isMenuOpen;
            },
            toggleSubMenu() {
                this.isSubMenuOpen = !this.isSubMenuOpen;
            }
        }
    };
  </script>
  
  <style scoped>
  </style>
  