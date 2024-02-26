<template>
    <div>
        <h2>Ramais</h2>
        <ul>
            <li v-for="usuario in usuarios" :key="usuario.id">
                <div class="nome">
                    <span class="font-bold">Nome:</span>
                    <p>{{ usuario.nome }}</p>
                </div>
                <div class="email">
                    <span class="font-bold">E-mail:</span>
                    <p>{{ usuario.email }}</p>
                </div>
                <div class="ramal">
                    <span class="font-bold">Ramal:</span>
                    <p>{{ usuario.ramal }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
