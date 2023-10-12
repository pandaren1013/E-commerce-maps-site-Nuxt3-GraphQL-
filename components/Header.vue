<template>
  <header class="header js-header">
    <div class="bar">
      <div class="shell">
        <p>free shipping on orders $100 or more</p>
      </div>
      <!-- /.shell -->
    </div>
    <!-- /.bar -->

    <div class="header__content">
      <div class="shell">
        <div class="header__content-inner">
          <a href="#" class="logo header__logo">
            <img
              src="https://cdn11.bigcommerce.com/s-kipp5/content/theme_images/logo@2x.png"
              alt=""
              width="550"
            />
          </a>

          <nav class="nav-profile">
            <div class="flex gap-6">
              <!-- cart -->
              <img src="~/assets/images/temp/cart.svg" />
              <img src="~/assets/images/temp/login.png" />
			</div>
          </nav>
        </div>
      </div>
    </div>

    <div class="header__nav">
      <div class="shell">
        <div class="header__nav-inner">
          <nav class="nav js-nav">
            <ul>
              <li>
                <a href="#">Maps</a>
                <div class="js-dropdown dropdown">
                  <!-- <div class="accordion-dropdown js-dropdown js-accordion"> -->
                  <div class="shell text-[20px]">
                    <div class="accordion__inner">
                      <div>
                        <div
                          class="flex my-3 cursor-pointer"
                          @click="list_show[1] = !list_show[1]"
                        >
                          <Icon
                            :icon="list_show[1] ? 'mdi:minus' : 'mdi:plus'"
                            style="color: #007a7a; font-size: 26px"
                          />
                          <p class="font-bold">Fishing Map Guides</p>
                        </div>

                        <div :class="list_show[1] ?'':'hidden'" class="ml-2">
                          <ul>
                            <li>
                              <a href="/fishing-map-guides/indiana">Indiana</a>
                            </li>

                            <li>
                              <a href="/fishing-map-guides/iowa">Iowa </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <div class="flex my-3 cursor-pointer" @click="list_show[2] = !list_show[2]">
                          <Icon
						  :icon="list_show[2] ? 'mdi:minus' : 'mdi:plus'"
                            style="color: #007a7a; font-size: 26px"
                          />
                          <p class="font-bold">
                            All-Outdoors Atlas & Field Guides
                          </p>
                        </div>

                        <div class="ml-2"  :class="list_show[2] ?'':'hidden'">
                          <ul>
                            <li>
                              <a href="/all-outdoors-atlases/michigan">Michigan </a>
                            </li>

                            <li>
                              <a href="/all-outdoors-atlases/new-york">New York </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <div class="flex my-3 cursor-pointer" @click="list_show[3] = !list_show[3]">
                          <Icon
						  :icon="list_show[3] ? 'mdi:minus' : 'mdi:plus'"
                            style="color: #007a7a; font-size: 26px"
                          />
                          <p class="font-bold">eBooks</p>
                        </div>

                        <div class="ml-2"  :class="list_show[3] ?'':'hidden'">
                          <ul>
                            <li>
                              <a href="#">Michigan </a>
                            </li>

                            <li>
                              <a href="#">New York </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <div class="flex my-3 cursor-pointer" @click="list_show[4] = !list_show[4]">
                          <Icon
						  :icon="list_show[4] ? 'mdi:minus' : 'mdi:plus'"
                            style="color: #007a7a; font-size: 26px"
                          />
                          <p class="font-bold">Wood Engraved Maps</p>
                        </div>

                        <div class="ml-2"  :class="list_show[4] ?'':'hidden'">
                          <ul>
                            <li>
                              <a href="/wood-engraved-maps/illinois">Illinois </a>
                            </li>
                            <li>
                              <a href="/wood-engraved-maps/indiana">Indiana </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <div class="flex my-3">
                          <Icon
                            icon="mdi:minus"
                            style="color: #007a7a; font-size: 26px"
                          />
                          <p class="font-bold">Maps By State</p>
                        </div>

                        <div class="ml-11">
                          <div class="flex  justify-between">
                            <a href="#">Iowa </a>
                            <a href="#">Illinois </a>
                            <a href="#">Indiana </a>
                            <a href="#">Kentucky </a>
                            <a href="#">Michigan </a>
                            <a href="#">Minnesota </a>
                            <a href="#">Missouri </a>
                            <a href="#">New York </a>
                            <a href="#">Ohio </a>
                            <a href="#">South Dakota </a>
                            <a href="#">Tennessee </a>
                            <a href="#">Texas </a>
                            <a href="#">Wisconsin </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.accordion__inner -->
                  </div>
                  <!-- /.shell -->
                </div>
                <!-- /.accordion-dropdown js-accordion -->
              </li>

              <li>
                <a href="#">Apparel</a>
              </li>

              <li>
                <a href="#">Retailers</a>
              </li>

              <li>
                <a href="#">About </a>

                <div class="js-dropdown dropdown">
                  <div class="shell">
                    <ul>
                      <li>
                        <a href="#">About Us</a>
                      </li>

                      <li>
                        <a href="#">FAQS</a>
                      </li>

                      <li>
                        <a href="#">Wholesale</a>
                      </li>
                    </ul>
                  </div>
                  <!-- /.shell -->
                </div>
                <!-- /.dropdown -->
              </li>

              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
          <!-- /.nav -->

          <div class="search">
            <form class="flex">
              <label for="q" class="hidden">Search</label>
              <img src="~/assets/images/temp/search.png"  />
              <input
                type="search"
                name="q"
                id="q"
                value=""
                placeholder="Search"
                class="search__field"
              />
            </form>
          </div>
          <!-- /.search -->

          
        </div>
        <!-- /.header__nav-inner -->
      </div>
      <!-- /.shell -->
    </div>
    <!-- /.header__nav -->
  </header>
  <!-- /.header -->
</template>
<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
const list_show = ref<boolean[]>([]);
</script>
