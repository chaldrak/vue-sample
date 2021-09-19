new Vue({
    el: '#app',
    data: {
      name: 'Un frère de la montagne',
      course: "Cours d'Ingénieur Web",
      acceptancePeriod: 'Janvier 2019',
      defaultLastId: 3,
      students: [
        { id: 1, name: 'Hiroyoshi Noro', course: "Cours d'apprentissage automatique", acceptancePeriod: 'Janvier 2019' },
        { id: 2, name: 'Shuji Tominaga', course: "Cours d'Ingénieur Web", acceptancePeriod: 'novembre 2017' },
        { id: 3, name: 'Kazuki Saito', course: "Cours d'Ingénieur Web", acceptancePeriod: 'novembre 2017' }
      ]
    },
    methods: {
      addStudent: function() {
        student = {id: this.students.length+1, name: this.name, course: this.course, acceptancePeriod: this.acceptancePeriod}
        this.students.push(student)
        this.name = '',
        this.course = '',
        this.acceptancePeriod = ''
      }
    }
  })