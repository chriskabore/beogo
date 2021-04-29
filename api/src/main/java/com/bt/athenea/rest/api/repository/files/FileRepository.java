package com.bt.athenea.rest.api.repository.files;

import com.bt.athenea.rest.api.model.files.File;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FileRepository extends JpaRepository<File, Long> {
	Optional<File> findByFileId(Long fileId);
}
