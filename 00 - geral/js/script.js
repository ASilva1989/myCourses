
document.addEventListener('DOMContentLoaded', function() {
    // Obter o módulo inicialmente ativo
    const activeModule = document.querySelector('.module.active');

    // Mostrar o conteúdo do módulo inicialmente ativo
    const moduleId = activeModule.querySelector('a').getAttribute('data-module');
    document.getElementById(`modulo${moduleId}`).style.display = 'block';

    // Evento de clique nos links de módulo
    const modules = document.querySelectorAll('.module a');
    modules.forEach(module => {
        module.addEventListener('click', function(event) {
            event.preventDefault();
            const moduleId = this.getAttribute('data-module');
            
            // Esconder todos os módulos
            document.querySelectorAll('.modulo').forEach(modulo => {
                modulo.style.display = 'none';
            });

            // Remover a classe de ativo de todos os módulos
            document.querySelectorAll('.module').forEach(mod => {
                mod.classList.remove('active');
            });

            // Mostrar apenas o módulo clicado
            document.getElementById(`modulo${moduleId}`).style.display = 'block';

            // Adicionar a classe de ativo ao módulo clicado
            this.parentNode.classList.add('active');
        });
    });
});
    