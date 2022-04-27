<template>
  <div class="modal d-flex position-fixed">
    <div class="modal__content m-auto bg-white" data-cy="modal">
      <div class="modal__content__title">Supprimer le commentaire ?</div>
      <p class="modal__content__text">
        Netus magna viverra enim dis non a, non enim. Massa nunc, natoque eget
        at turpis. Magna nec, pulvinar eget convallis cras aliquet sed.
      </p>
      <button class="modal__content__action modal__content__action--confirm">
        Oui, supprimer
      </button>
      <button
        @click="this.$emit('toggleModalDisplay', false)"
        data-cy="cancel"
        class="modal__content__action modal__content__action--cancel"
      >
        Non, annuler
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.modal {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 2.4rem;

  &__content {
    padding: 4rem 3.2rem 2.4rem 3.2rem;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.16);
    border-radius: 12px;

    &__title {
      color: #282828;
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 3rem;
      letter-spacing: 0.02em;
      padding-bottom: 1.2rem;
    }

    &__text {
      font-size: 1.6rem;
      line-height: 2.2rem;
      color: #282828;
      padding-bottom: 1.2rem;
    }

    &__action {
      border-radius: 8px;
      padding: 1.4rem 2.2rem;
      width: 100%;
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 2rem;
      justify-content: center;

      &--cancel {
        background-color: #ffffff;
        color: #141414;
        border: 1px solid #141414;
      }

      &--confirm {
        background-color: #f44336;
        color: #ffffff;
        margin-bottom: 1.2rem;
      }
    }
  }
}
@media (min-width: 992px) {
  .modal__content {
    width: 35%;
  }
}
</style>
