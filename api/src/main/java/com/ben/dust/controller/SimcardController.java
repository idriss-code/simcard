package com.ben.dust.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.ben.dust.model.Simcard;
import com.ben.dust.repository.SimcardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class SimcardController {

    @Autowired
    SimcardRepository SimcardRepository;

    @GetMapping("/simcards")
    public ResponseEntity<List<Simcard>> getAllSimcards() {
        try {
            List<Simcard> Simcards = new ArrayList<Simcard>();

            SimcardRepository.findAll().forEach(Simcards::add);

            if (Simcards.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(Simcards, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/simcards/{id}")
    public ResponseEntity<Simcard> getSimcardById(@PathVariable("id") String id) {
        Optional<Simcard> SimcardData = SimcardRepository.findById(id);

        if (SimcardData.isPresent()) {
            return new ResponseEntity<>(SimcardData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/simcards")
    public ResponseEntity<Simcard> createSimcard(@RequestBody Simcard simcard) {
        try {
            Optional<Simcard> SimcardData = SimcardRepository.findById(simcard.getIccid());

            if (SimcardData.isPresent()) {
                return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
            }

            Simcard _simcard = SimcardRepository
                    .save(
                            new Simcard(
                                    simcard.getIccid(),
                                    simcard.getMsisdn(),
                                    simcard.getPinCode(),
                                    simcard.getPukCode(),
                                    simcard.getTag(),
                                    simcard.getAccessPointName(),
                                    simcard.getIpAddr(),
                                    simcard.getStatus()
                            )
                    );
            return new ResponseEntity<>(_simcard, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/simcards/{id}")
    public ResponseEntity<Simcard> updateSimcard(@PathVariable("id") String id, @RequestBody Simcard Simcard) {
        Optional<Simcard> SimcardData = SimcardRepository.findById(id);

        if (SimcardData.isPresent()) {
            Simcard _simcard = SimcardData.get();

            _simcard.setMsisdn(Simcard.getMsisdn());
            _simcard.setPinCode(Simcard.getPinCode());
            _simcard.setPukCode(Simcard.getPukCode());
            _simcard.setTag(Simcard.getTag());
            _simcard.setAccessPointName(Simcard.getAccessPointName());
            _simcard.setAccessPointName(Simcard.getIpAddr());
            _simcard.setStatus(Simcard.getStatus());

            return new ResponseEntity<>(SimcardRepository.save(_simcard), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/simcards/{id}")
    public ResponseEntity<HttpStatus> deleteSimcard(@PathVariable("id") String id) {
        try {
            SimcardRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/simcards")
    public ResponseEntity<HttpStatus> deleteAllSimcards() {
        try {
            SimcardRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}

