<template>
  <div>
    <NuxtLayout>
      <div class="page">
        <h1>Homepage</h1>
        <p>This is the homepage.</p>
        <CustomComponent id="my-component" custom-styles="color: red">
          This text should be red
        </CustomComponent>
      </div>
    </NuxtLayout>
  </div>
</template>
