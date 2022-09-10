<script setup></script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-7">
        <div id="payment-form">
          <div id="header">
            <div class="text-center mb-3">
              <a href="https://ddlegio.com" target="_blank"
                ><img src="/logo-organization.png" id="logo"
              /></a>
            </div>
            <div class="text-center">
              <a
                href="https://ddlegio.com"
                target="_blank"
                id="organization"
                class="mb-0"
                >LEGIO</a
              >
            </div>
          </div>
          <div id="form-content">
            <Transition name="fade" mode="out-in">
              <slot></slot>
            </Transition>
          </div>
          <div id="footer">
            <div id="powered">
              <p class="mb-1">powered by</p>
              <a href="https://gunspring.com" target="_blank"
                ><img src="/logo-gunspring.svg"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#payment-form {
  box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 30%);
  background: white;
  border-radius: 0.375rem;
}

#header {
  border-bottom: 1px solid #ced4da;
  padding: 25px 50px;
}
#form-content {
  padding: 25px;
}
#footer {
  border-top: 1px solid #ced4da;
  padding: 25px 50px 20px 50px;
}
#logo {
  width: 75%;
}
#organization {
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
}
#organization:hover {
  color: black;
}
#powered {
  text-align: center;
}

#powered p {
  letter-spacing: 1px;
  font-size: 0.75rem;
  text-transform: uppercase;
}

#powered img {
  height: 75px;
}
</style>
