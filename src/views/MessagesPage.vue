<script>
import MessageCard from "../components/MessageCard.vue";
import MessagePost from "../components/MessagePost.vue";
import MessageModal from "../components/MessageModal.vue";

export default {
  components: {
    MessageCard,
    MessagePost,
    MessageModal,
  },

  data() {
    return {
      displayModal: false,

      user: {
        id: 4,
        userName: "regisbo",
        link: "####",
      },

      messages: [
        {
          author: {
            name: "karlobo",
            id: 1,
            link: "#",
          },
          created_at: "il y a un mois",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque tristique turpis rhoncus sem sit in pellentesque molestie. Curabitur nunc, dui pharetra, odio viverra etiam. Egestas nunc cras in commodo neque. Eu amet amet pellentesque tincidunt sed quis malesuada sagittis malesuada. At sit lacinia porta eget in vulputate.",
          rating: 12,
          answers: [],
        },
        {
          author: {
            name: "kevabo",
            id: 2,
            link: "##",
          },
          created_at: "il y a 2 semaines",
          content:
            "Justo, nibh condimentum in et vulputate. Vulputate arcu sit morbi montes, euismod curabitur elementum. Tellus sit duis sollicitudin leo suspendisse amet molestie nullam facilisis. In ullamcorper rhoncus aliquam eget varius vitae lectus. Ullamcorper pretium pellentesque auctor odio vulputate.",
          rating: 4,
          answers: [
            {
              author: {
                name: "brunbo",
                id: 3,
                link: "###",
              },
              created_at: "il y a une semaine",
              content:
                "Neque vestibulum pharetra blandit tristique sagittis. Ullamcorper urna semper metus, nec dictumst convallis fringilla sed mi. Tellus nisl a donec mauris condimentum mauris tincidunt. Maecenas neque, consequat amet porttitor nulla turpis.",
              rating: 5,
              answers: [],
            },
            {
              author: {
                name: "regisbo",
                id: 4,
                link: "####",
              },
              created_at: "il y a 2 jours",
              content:
                "In neque elementum arcu elit phasellus risus nisi, urna elementum. Ac mollis sagittis sit in morbi faucibus cursus est.",
              rating: 2,
              answers: [],
            },
          ],
        },
      ],
    };
  },

  methods: {
    updateModalDisplay(isDisplay) {
      this.displayModal = isDisplay;
      document.body.classList.toggle("overflow-hidden");
    },
  },
};
</script>

<template>
  <main class="messages m-auto">
    <div
      v-for="(message, index) in messages"
      :key="index"
      class="message-wrapper"
    >
      <MessageCard
        :message="message"
        :user="user"
        @toggleModalDisplay="updateModalDisplay"
      />
      <div v-if="message.answers.length > 0" class="answers-wrapper">
        <MessageCard
          v-for="(answer, index) in message.answers"
          :key="index"
          :message="answer"
          :user="user"
          class="answer"
          :referencedAuthor="message.author"
          @toggleModalDisplay="updateModalDisplay"
        />
      </div>
    </div>
    <MessagePost />
  </main>
  <MessageModal v-if="displayModal" @toggleModalDisplay="updateModalDisplay" />
</template>

<style lang="scss">
.messages {
  padding: 2.4rem;

  .message-wrapper {
    padding-bottom: 1.6rem;

    .answers-wrapper {
      padding-left: 1.6rem;
      border-left: 4px solid #dbdbdb;

      .answer {
        margin-top: 1.6rem;
      }
    }
  }
}

@media (min-width: 992px) {
  .messages {
    padding: 11.2rem 0;
    width: 75%;
  }
}

@media (min-width: 1200px) {
  .messages {
    width: 55%;
  }
}
</style>
