import './Nav.css'
import React from 'react'


export default props =>
    <aside className="menu-area">
        <div class="list-group">
            <button type="button" class="list-group-item list-group-item-action">Home</button>
            <button type="button" class="list-group-item list-group-item-action">Livro Ata</button>
            <button type="button" class="list-group-item list-group-item-action">Ocorrências</button>
            <button type="button" class="list-group-item list-group-item-action">Controle de Estoque</button>
            <button type="button" class="list-group-item list-group-item-action">Gráficos Estatistico</button>
        </div>
    </aside>