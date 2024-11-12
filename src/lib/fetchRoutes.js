export async function fetchRoutes() {
    // Static data simulating the structure that would come from an API
    return [
        { slug: 'slider', component: ['Find-out-our', 'Grow-your-business'] },
        { slug: 'contact', component: ['Customer-Satisfaction'] },
        { slug: 'testimonials', component: ['Marketing-Agency'] },
    ];
}