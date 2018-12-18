package com.nxs.repository.search;

import com.nxs.domain.Blog;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Blog entity.
 */
public interface BlogSearchRepository extends ElasticsearchRepository<Blog, Long> {
}
