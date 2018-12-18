package com.nxs.repository.search;

import com.nxs.domain.Entry;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Entry entity.
 */
public interface EntrySearchRepository extends ElasticsearchRepository<Entry, Long> {
}
