<script setup lang="ts"></script>

<template>
  <div class="flex w-full h-screen max-h-dvh">
    <div class="flex items-center justify-center max-w-full lg:basis-1/2 lg:max-w-1/2 basis-full">
      <div class="min-w-[420px] w-full max-w-[50%] px-2">
        <div class="text-3xl"><span class="text-[#3A57E8]">#!</span> AVNENDV</div>
        <div class="mt-10 text-center">
          <h3 class="text-2xl">Sign In</h3>
          <h4 class="text-[#8A92A6] mt-4">Sign in to stay connected.</h4>
        </div>
        <form class="flex flex-col mt-4 gap-y-4" action="">
          <div>
            <label class="text-[#8A92A6]" for="email">Email</label>
            <div class="border border-[#3A57E8] rounded p-2 mt-2">
              <input class="w-full bg-transparent" id="email" type="email" />
            </div>
          </div>
          <div>
            <label class="text-[#8A92A6]" for="password">Password</label>
            <div class="border border-[#3A57E8] rounded p-2 mt-2">
              <input class="w-full bg-transparent" id="password" type="password" />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-[#8A92A6]">
              <label for="remember">
                <input type="checkbox" name="remember" id="remember" />
                Remember me?
              </label>
            </span>
            <a class="text-[#3A57E8] hover:underline cursor-pointer" href="http://"
              >Forgot Password</a
            >
          </div>
          <div class="mt-2 text-center">
            <button
              class="py-2 max-w-[140px] w-full bg-[#3A57E8] rounded text-white hover:brightness-75 transition-all duration-300"
            >
              Sign in
            </button>
          </div>
        </form>
        <!-- <div class="mt-4">
          Don’t have an account?
          <a class="text-[#3A57E8] hover:underline cursor-pointer" href="http://">
            Click here to sign up.
          </a>
        </div> -->
      </div>
    </div>
    <div
      class="basis-1/2 max-w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-es-[220px] max-lg:hidden"
    ></div>
  </div>
</template>
