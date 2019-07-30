export function loadLists() {
  return [
    {
      title: "Tarefas",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "Gravar video para YOUTUBE ensinando usar i18next",
          labels: ["#7159c1"],
          user: "https://avatars2.githubusercontent.com/u/24496303?s=460&v=4"
        },
        {
          id: 2,
          content: "Estudar FORMIK + YUP",
          labels: ["#7159c1"],
          user: "https://avatars2.githubusercontent.com/u/24496303?s=460&v=4"
        },
        {
          id: 3,
          content: "Tomar agua 2ltr",
          labels: ["#7159c1"],
          user: "https://avatars2.githubusercontent.com/u/24496303?s=460&v=4"
        },
        {
          id: 4,
          content: "Colaborar projetos OpenSources",
          labels: ["#54e1f7"],
          user: "https://avatars2.githubusercontent.com/u/24496303?s=460&v=4"
        }
      ]
    },
    {
      title: "Fazendo",
      creatable: false,
      cards: [
        {
          id: 6,
          content: "Recriando clone do Pipefy",
          labels: [],
          user: "https://avatars2.githubusercontent.com/u/24496303?s=460&v=4"
        }
      ]
    },
    {
      title: "Pausado",
      creatable: false,
      cards: [
        {
          id: 7,
          content:
            "Ver quais bibliotecas estao sendo usados no react, nivel empresarial",
          labels: ["#7159c1"],
          user: "https://avatars2.githubusercontent.com/u/24496303?s=460&v=4"
        }
      ]
    },
    {
      title: "Concluído",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: "Estudar HOKS, ReactJs",
          labels: []
        },
        {
          id: 12,
          content: "Provando formik, ReactJS",
          labels: ["#54e1f7"]
        },
        {
          id: 13,
          content: "Rever Framework para testes, JEST para testes unitarios",
          labels: ["#7159c1"]
        }
      ]
    }
  ];
}
