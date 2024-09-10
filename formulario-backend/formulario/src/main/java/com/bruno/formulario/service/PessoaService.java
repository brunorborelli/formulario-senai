package com.bruno.formulario.service;

import com.bruno.formulario.excecoes.PessoaNotFoundException;
import com.bruno.formulario.modulos.Pessoa;
import com.bruno.formulario.repository.PessoaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PessoaService {

    private final PessoaRepository pessoaRepository;

    public Pessoa cadastrarFormulario(Pessoa pessoa){
        try {
            return pessoaRepository.save(pessoa);
        } catch (Exception e) {
            throw new RuntimeException("Erro ao cadastrar a pessoa.", e);
        }
    }

    public List<Pessoa> findAll(){
        return pessoaRepository.findAll();
    }

    public Pessoa findById(Long id){
        return pessoaRepository.findById(id)
                .orElseThrow(() -> new PessoaNotFoundException(id)); // Lançando exceção personalizada
    }

    public void delete(Long id){
        if (!pessoaRepository.existsById(id)) {
            throw new PessoaNotFoundException(id);
        }
        try {
            pessoaRepository.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException("Erro ao deletar a pessoa com ID: " + id, e);
        }
    }
}
