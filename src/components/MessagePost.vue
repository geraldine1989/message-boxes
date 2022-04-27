<template>
  <div class="post bg-white d-grid d-lg-flex flex-row">
    <textarea
      class="post__message"
      placeholder="Ajouter un commentaire..."
    ></textarea>
    <img class="post__avatar" src="../assets/img/avatar.png" alt="avatar" />
    <button class="post__button text-white align-self-start">Envoyer</button>
  </div>
</template>

<style lang="scss">
.post {
  padding: 1.6rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
  border-radius: 12px;
  width: 100%;
  grid-template-areas:
    "message message"
    "avatar button";

  &__message {
    grid-area: message;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1.6rem;
    min-height: 10rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #525252;
  }

  &__avatar {
    grid-area: avatar;
    width: 4.8rem;
    height: 4.8rem;
    margin-right: auto;
  }

  &__button {
    grid-area: button;
    margin-left: auto;
    padding: 1.3rem 2.4rem;
    background: #0070e0;
    border-radius: 8px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.2rem;
  }
}

@media (min-width: 992px) {
  .post {
    padding: 2.4rem;

    &__message {
      order: 2;
      width: inherit;
      margin: 0 2.4rem 0 1.6rem;
    }

    &__avatar {
      order: 1;
    }

    &__button {
      order: 3;
    }
  }
}
</style>
