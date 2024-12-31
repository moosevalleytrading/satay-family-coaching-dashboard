async function fetchJSON(url) {
    try {
        // Get repository name from path or default to 'AZChiro'
        const pathSegments = window.location.pathname.split('/');
        const repoName = pathSegments[1] || 'AZChiro';
        const baseUrl = `${window.location.protocol}//${window.location.host}/${repoName}`;
        const response = await fetch(`${baseUrl}${url}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

async function loadKeywordData() {
    const data = await fetchJSON('/data/keywords.json');
    if (!data) return;
    const tableBody = document.getElementById('keywordTableBody');
    if (!tableBody) return;

    // Flatten keyword lists for demonstration
    const allKeywordGroups = Object.values(data).flat();
    allKeywordGroups.forEach(k => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 text-gray-700">${k.keyword}</td>
            <td class="px-6 py-4 text-gray-700">${k.search_volume || '-'}</td>
            <td class="px-6 py-4 text-gray-700">${k.difficulty || '-'}</td>
            <td class="px-6 py-4 text-gray-700">${k.intent || '-'}</td>
            <td class="px-6 py-4 text-gray-700">${(k.serp_features || []).join(', ')}</td>
        `;
        tableBody.appendChild(row);
    });
}

async function loadContentCalendarData() {
    const data = await fetchJSON('/data/content-calendar.json');
    if (!data) return;
    const upcomingTable = document.getElementById('upcomingContentTableBody');
    const publishedTable = document.getElementById('publishedContentTableBody');

    if (upcomingTable) {
        const upcoming = data.monthly_calendar;
        Object.values(upcoming).forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="px-6 py-4 text-gray-700">${item.topic}</td>
                <td class="px-6 py-4 text-gray-700">${item.target_keyword}</td>
                <td class="px-6 py-4 text-gray-700">${item.due_date}</td>
                <td class="px-6 py-4 text-gray-700 capitalize">${item.status}</td>
            `;
            upcomingTable.appendChild(row);
        });
    }

    if (publishedTable) {
        const published = data.published_content;
        published.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="px-6 py-4 text-gray-700">${item.title}</td>
                <td class="px-6 py-4 text-blue-500 underline"><a href="${item.url}">${item.url}</a></td>
                <td class="px-6 py-4 text-gray-700">${item.publish_date}</td>
                <td class="px-6 py-4 text-gray-700">${item.performance.pageviews}</td>
            `;
            publishedTable.appendChild(row);
        });
    }
}

async function loadSiteCopyData() {
    const data = await fetchJSON('/data/site-copy.json');
    if (!data) return;
    const container = document.getElementById('siteCopySections');
    if (!container) return;

    Object.entries(data).forEach(([key, pageData]) => {
        const card = document.createElement('div');
        card.className = 'bg-white shadow rounded-lg p-6';
        let content = `
            <h2 class="text-xl font-bold text-gray-800 mb-2">${pageData.title}</h2>
            <p><strong>Meta Description:</strong> ${pageData.meta_description}</p>
            <p><strong>H1:</strong> ${pageData.h1 || '-'}</p>
        `;
        if (pageData.primary_copy) {
            content += `<p class="mt-2 text-gray-700">${pageData.primary_copy}</p>`;
        }
        if (pageData.bullets) {
            content += '<ul class="list-disc ml-5 mt-2 text-gray-700">';
            pageData.bullets.forEach(bullet => {
                content += `<li>${bullet}</li>`;
            });
            content += '</ul>';
        }
        if (pageData.services) {
            content += '<h3 class="font-semibold mt-4">Services:</h3><ul class="list-disc ml-5 mt-2 text-gray-700">';
            pageData.services.forEach(service => {
                content += `<li>${service}</li>`;
            });
            content += '</ul>';
        }

        card.innerHTML = content;
        container.appendChild(card);
    });
}
