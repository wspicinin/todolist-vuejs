import Vue from 'vue';
import FormatterUtil from '../util/FormatterUtil'

export default Vue.component("detalhe-tarefa",{
    template: 
     /*html*/
     `
    <div>
        <h1>Detalhe Tarefa</h1>
        <h2>{{tarefaselecionada.titulo}}</h2>
        <p>Prazo: {{FormatterUtil.formatarData(tarefaselecionada.prazo)}}</p>
        <p>Descrição: {{tarefaselecionada.descricao}}</p>
        <p>Status: {{tarefaselecionada.finalizado ? 'Finalizada' : 'Pendente'}}</p>
        <router-link to='/'>Voltar</router-link>
        
    </div>
    `,
    props: {
        tarefaselecionada: {}
    },
    data(){
        return {
            FormatterUtil: FormatterUtil
        }
    }
});
