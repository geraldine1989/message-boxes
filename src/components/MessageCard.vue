<script>
export default {
  props: {
    message: Object,
    user: Object,
    referencedAuthor: Object,
  },
};
</script>

<template>
  <article class="card bg-white d-grid">
    <div
      class="card__author d-flex flex-row align-items-center align-self-lg-start"
    >
      <img
        :src="`src/assets/img/avatar-${message.author.id}.png`"
        :alt="`${message.author.name} avatar`"
      />
      <div class="card__author__name d-flex flex-row">
        {{ message.author.name }}
        <span
          v-if="message.author.id === user.id"
          class="d-flex justify-content-center align-items-center text-white"
          >vous</span
        >
      </div>
      <span class="card__author__date">{{ message.created_at }}</span>
    </div>
    <p class="card__content">
      <a
        v-if="referencedAuthor"
        :href="referencedAuthor.link"
        class="card__content__referenced-author"
        >@{{ referencedAuthor.name }}</a
      >
      {{ message.content }}
    </p>
    <div class="card__rating d-flex flex-lg-column align-self-lg-start">
      <button
        class="card__rating__button m-auto bi bi-plus-lg"
        aria-label="Like"
      ></button>
      <span class="card__rating__value m-auto d-flex align-items-center">{{
        message.rating
      }}</span>
      <button
        class="card__rating__button m-auto bi bi-dash-lg"
        aria-label="Dislike"
      ></button>
    </div>
    <div class="card__action d-flex ms-auto">
      <button
        v-if="message.author.id === user.id"
        @click="this.$emit('toggleModalDisplay', true)"
        class="card__action--delete bi bi-trash align-items-center"
        aria-label="Remove"
      >
        <span class="d-none d-lg-flex" data-cy="removeMessage">Supprimer</span>
      </button>
      <button
        v-if="message.author.id === user.id"
        class="card__action--edit bi bi-pencil align-items-center"
        aria-label="Edit"
      >
        <span class="d-none d-lg-flex">Modifier</span>
      </button>
      <button
        v-else
        class="card__action--answer bi bi-reply-fill align-items-center"
        aria-label="Cancel"
      >
        <span class="d-none d-lg-flex">Répondre</span>
      </button>
    </div>
  </article>
</template>

<style lang="scss">
.card {
  padding: 1.6rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
  border-radius: 12px;
  grid-template-areas:
    "author author"
    "content content"
    "rating action";

  &__author {
    grid-area: author;

    img {
      width: 4rem;
      height: 4rem;
    }

    &__name {
      padding: 0 1.6rem;
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 2.4rem;

      span {
        margin-left: 0.4rem;
        background-color: #00bcd4;
        border-radius: 4px;
        padding: 0.2rem 0.4rem;
        font-size: 1.2rem;
        line-height: 1.6rem;
      }
    }

    &__date {
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: #525252;
    }
  }

  &__content {
    grid-area: content;
    padding: 1.6rem 0;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #525252;

    &__referenced-author {
      color: #0070e0;
      font-weight: 600;
      text-decoration: none;
      padding-right: 0.8rem;
    }
  }

  &__rating {
    grid-area: rating;
    margin-right: auto;
    background-color: #f6f6f6;
    border-radius: 8px;
    padding: 0.5rem;
    font-size: 1.6rem;
    width: fit-content;

    &__button {
      color: #99ccff;
      font-weight: bold;
    }

    &__value {
      padding: 0 1.5rem;
      font-weight: 700;
      line-height: 2.4rem;
    }
  }

  &__action {
    grid-area: action;
    font-size: 1.6rem;
    font-weight: 600;

    &--delete {
      color: #f44336;
      margin-right: 1.6rem;
    }

    &--edit,
    &--answer {
      color: #0070e0;
    }
  }
}

@media (min-width: 992px) {
  .card {
    grid-template-areas:
      "rating author action"
      "rating content content";
    grid-template-columns: min-content auto auto;
    padding: 2.4rem 2.4rem 1.6rem 2.4rem;

    &__author__date {
      min-width: fit-content;
    }

    &__content {
      padding: 1.2rem 0 0;
    }

    &__rating {
      margin-right: 2.4rem;
      padding: 0.8rem;

      &__button {
        padding: 0;
      }

      &__value {
        padding: 1.2rem 0;
      }
    }

    &__action {
      span {
        font-weight: 600;
        margin-left: 0.8rem;
      }
    }
  }
}
</style>
