<template>
    <div class="card">
        <h2>Ramais</h2>
        <Accordion>
            <AccordionTab v-for="sector in sectors" :key="sector">
                <template #header>
          <span class="flex align-items-center gap-2 w-full">
            <span class="font-bold white-space-nowrap">{{ sector }}</span>
            <Badge class="ml-auto" :value="userCount(sector)" />
          </span>
                </template>
                <ul>
                    <li class="lista" v-for="user in users[sector]" :key="user.sAMAccountName">
                        <span class="mr-2 font-bold">{{ user.description }}</span>
                        <p>{{ user.mail }}</p>
                    </li>
                </ul>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script>
</script>

<style scoped>
.card ul li,
.card ul li span {
    padding: 1px;
}

.card ul .lista {
    display: flex;
}
</style>
